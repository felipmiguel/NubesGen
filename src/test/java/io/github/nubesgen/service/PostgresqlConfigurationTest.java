package io.github.nubesgen.service;

import io.github.nubesgen.configuration.Database;
import io.github.nubesgen.configuration.Size;
import io.github.nubesgen.configuration.DatabaseType;
import io.github.nubesgen.configuration.NubesgenConfiguration;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.io.ClassPathResource;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;

/**
 * Tests NubesGen with the App Service + PostgreSQL options.
 */
@SpringBootTest
class PostgresqlConfigurationTest {

    private final Logger log = LoggerFactory.getLogger(PostgresqlConfigurationTest.class);
    private static final NubesgenConfiguration properties = new NubesgenConfiguration();
    private final CodeGeneratorService codeGeneratorService;
    private final TemplateListService templateListService;

    @Autowired
    public PostgresqlConfigurationTest(CodeGeneratorService codeGeneratorService, TemplateListService templateListService) {
        this.codeGeneratorService = codeGeneratorService;
        this.templateListService = templateListService;
    }

    @BeforeAll
    public static void init() {
        properties.setResourceGroup("test-resource-group");
        properties.setApplicationName("nubesgen-testapp-postgresql");
        properties.setLocation("westeurope");
        properties.setDatabaseConfiguration(new Database(DatabaseType.POSTGRESQL, Size.S));
    }

    @Test
    void generatePostgreSQLConfiguration() throws IOException {
        Map<String, String> configuration = this.codeGeneratorService.generateAzureConfiguration(properties);
        int templatesSize = this.templateListService.listMainTemplates().size() +
                this.templateListService.listPostgresqlTemplates().size();

        assertEquals(templatesSize, configuration.size());
        for (String filename : templateListService.listMainTemplates()) {
            log.info("Validating {}", filename);
            this.generateAndTestOneFile(filename);
        }
    }

    private void generateAndTestOneFile(String filename) throws IOException {
        String result = this.codeGeneratorService.generateFile(filename, properties);
        File testFile = new ClassPathResource("nubesgen/postgresql/" + filename).getFile();
        String test = new String(
                Files.readAllBytes(testFile.toPath()));

        assertEquals(test, result);
    }
}
