(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{423:function(e,t,n){"use strict";n.r(t);var a=n(56),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"using-net-with-nubesgen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-net-with-nubesgen"}},[e._v("#")]),e._v(" Using .NET with NubesGen")]),e._v(" "),n("p",[e._v("This documentation is for running .NET applications with NubesGen, and there is another other options that might interest you:")]),e._v(" "),n("ul",[n("li",[e._v("As .NET applications can be packaged with Docker, you can also run them as "),n("RouterLink",{attrs:{to:"/runtimes/docker/"}},[e._v("Docker applications with NubesGen")]),e._v(".")],1)]),e._v(" "),n("p",[e._v("NubesGen supports creating Azure App Service instances and Azure Functions instances, depending on the type of .NET application that you wish to deploy.")]),e._v(" "),n("h2",{attrs:{id:"tutorial-running-a-net-application-with-nubesgen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tutorial-running-a-net-application-with-nubesgen"}},[e._v("#")]),e._v(" Tutorial: running a .NET application with NubesGen")]),e._v(" "),n("p",[n("strong",[e._v("Prerequisites:")])]),e._v(" "),n("p",[n("em",[e._v("Tip: You can go to "),n("a",{attrs:{href:"https://aka.ms/nubesgen-azure-shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://aka.ms/nubesgen-azure-shell"),n("OutboundLink")],1),e._v(" to have those prerequisites installed, and run the script from a Web browser.")])]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Bourne-Again_shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bash"),n("OutboundLink")],1),e._v(", which is installed by default on most Linux distributions and on Mac OS X. If you're using Windows, one solution is to use "),n("a",{attrs:{href:"https://aka.ms/nubesgen-install-wsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("WSL"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://aka.ms/nubesgen-install-az-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),n("OutboundLink")],1),e._v(". To login, use "),n("code",[e._v("az login")]),e._v(".")]),e._v(" "),n("li",[e._v("(optional) "),n("a",{attrs:{href:"https://cli.github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub CLI"),n("OutboundLink")],1),e._v(". To login, use "),n("code",[e._v("gh auth login")]),e._v(".")])]),e._v(" "),n("p",[n("strong",[e._v("Steps:")])]),e._v(" "),n("ol",[n("li",[e._v("Create a sample .NET Web application using "),n("a",{attrs:{href:"https://aka.ms/nubesgen-install-dotnet-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("the .NET CLI"),n("OutboundLink")],1),e._v(".\nWe'll follow the beginning of the "),n("a",{attrs:{href:"https://aka.ms/nubesgen-dotnet-getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v('official "Get started with ASP.NET Core" tutorial'),n("OutboundLink")],1),e._v(":"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("dotnet new webapp -o dotnet-sample-app -f net7.0\n")])])])]),e._v(" "),n("li",[e._v("Create a project on GitHub called "),n("code",[e._v("dotnet-sample-app")]),e._v(", and push the generated project to that repository. Change "),n("code",[e._v("<your-github-account>")]),e._v(" by the name of your GitHub account:"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" dotnet-sample-app\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"first commit"')]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" origin https://github.com/"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-github-account"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/dotnet-sample-app.git\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -M main\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push -u origin main\n")])])])]),e._v(" "),n("li",[e._v("In the cloned project ("),n("code",[e._v("cd dotnet-sample-app")]),e._v("), set up GitOps with NubesGen by running the NubesGen CLI ("),n("RouterLink",{attrs:{to:"/gitops/gitops-quick-start/"}},[e._v("more information here")]),e._v("):"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v(" ./nubesgen-cli-linux gitops\n")])])])],1),e._v(" "),n("li",[e._v("Use the command-line with NubesGen ("),n("RouterLink",{attrs:{to:"/reference/rest-api/"}},[e._v("more information here")]),e._v(") to generate a NubesGen configuration:"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://nubesgen.com/demo.tgz?runtime=dotnet&application=app_service.standard&gitops=true"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -xzvf -\n")])])])],1),e._v(" "),n("li",[e._v("Create a new branch called "),n("code",[e._v("env-dev")]),e._v(", and push your code:"),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b env-dev\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" commit -m "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Configure GitOps with NubesGen'")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push --set-upstream origin env-dev\n")])])])]),e._v(" "),n("li",[e._v("Go to your GitHub project, and check that the GitHub Action is running.")]),e._v(" "),n("li",[e._v("You can go to the "),n("a",{attrs:{href:"https://aka.ms/nubesgen-portal",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),n("OutboundLink")],1),e._v(" to check the created resources.")]),e._v(" "),n("li",[e._v("The application should be deployed on your App Service instance. Its URL should be in the form "),n("code",[e._v("https://app-demo-XXXX-XXXX-XXXX-XXXX-dev-001.azurewebsites.net/")]),e._v(', and you can also find it in the GitHub Action workflow (Job: "display-information", step "Display Azure infrastructure information"), or in the Azure portal.\nAs it is a simple application, it should print by default '),n("code",[e._v("Hello, world")]),e._v(".")]),e._v(" "),n("li",[e._v("Once you have finished, you should clean up your resources:\n"),n("ol",[n("li",[e._v("Delete the resource group that was created by NubesGen to host your resources, which is named "),n("code",[e._v("rg-demo-XXXX-XXXX-XXXX-XXXX-001")]),e._v(".")]),e._v(" "),n("li",[e._v("Delete the storage account used to store your Terraform state, in the "),n("code",[e._v("rg-terraform-001")]),e._v(" resource group.")])])])]),e._v(" "),n("h2",{attrs:{id:"which-azure-resources-are-created"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#which-azure-resources-are-created"}},[e._v("#")]),e._v(" Which Azure resources are created")]),e._v(" "),n("p",[e._v("If you deploy your .NET application to an Azure App Service instance, NubesGen will generate:")]),e._v(" "),n("ul",[n("li",[e._v("An "),n("a",{attrs:{href:"https://aka.ms/nubesgen-app-service-plans",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service plan"),n("OutboundLink")],1),e._v(" to define the type of App Service instance you will use.")]),e._v(" "),n("li",[e._v("An "),n("a",{attrs:{href:"https://aka.ms/nubesgen-app-service",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service instance"),n("OutboundLink")],1),e._v(", configured to run .NET code natively.")])]),e._v(" "),n("p",[e._v("If you deploy your .NET application to an Azure Function, NubesGen will generate:")]),e._v(" "),n("ul",[n("li",[e._v("An "),n("a",{attrs:{href:"https://aka.ms/nubesgen-app-service-plans",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service plan"),n("OutboundLink")],1),e._v(" to define the type of Azure Functions instance you will use.")]),e._v(" "),n("li",[e._v("An "),n("a",{attrs:{href:"https://aka.ms/nubesgen-functions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions instance"),n("OutboundLink")],1),e._v(", configured to run .NET code natively.")]),e._v(" "),n("li",[e._v("An "),n("a",{attrs:{href:"https://aka.ms/nubesgen-storage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Account"),n("OutboundLink")],1),e._v(", to store your .NET application.")])]),e._v(" "),n("h2",{attrs:{id:"net-version-support"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#net-version-support"}},[e._v("#")]),e._v(" .NET version support")]),e._v(" "),n("p",[e._v("NubesGen supports .NET 7.0 by default, as it's the current long term support version. If you want to use .NET 6, you will\nneed to configure it in two places:")]),e._v(" "),n("ul",[n("li",[e._v("In the generated "),n("code",[e._v("terraform/modules/app-service/main.tf")]),e._v(", you need to modify "),n("code",[e._v('dotnet_version = "7.0"')]),e._v(" to be\n"),n("code",[e._v('dotnet_version = "6.0""')])]),e._v(" "),n("li",[e._v("If you selected the "),n("a",{attrs:{href:"/gitops/gitops-overview"}},[e._v("GitOps option")]),e._v(", at the beginning of the generated "),n("code",[e._v(".github/workflows/gitops.yml")]),e._v(" file,\nthere is a specific "),n("code",[e._v("DOTNET_VERSION: '7.0'")]),e._v(" environment variable that should be modified to "),n("code",[e._v("DOTNET_VERSION: '6.0'")])])]),e._v(" "),n("h2",{attrs:{id:"configuration-options"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[e._v("#")]),e._v(" Configuration options")]),e._v(" "),n("p",[e._v("In the generated "),n("code",[e._v("terraform/modules/app-service/main.tf")]),e._v(" file, NubesGen will configure some environment variables\nfor your application.")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("DATABASE_URL")]),e._v(": the URL to your database")]),e._v(" "),n("li",[n("code",[e._v("DATABASE_USERNAME")]),e._v(": the database user name")]),e._v(" "),n("li",[n("code",[e._v("DATABASE_PASSWORD")]),e._v(": the database password")]),e._v(" "),n("li",[n("code",[e._v("REDIS_HOST")]),e._v(": the Redis host name")]),e._v(" "),n("li",[n("code",[e._v("REDIS_PASSWORD")]),e._v(": the Redis password")]),e._v(" "),n("li",[n("code",[e._v("REDIS_PORT")]),e._v(": the Redis port (by default "),n("code",[e._v("6380")]),e._v(")")]),e._v(" "),n("li",[n("code",[e._v("AZURE_STORAGE_ACCOUNT_NAME")]),e._v(": the storage account name")]),e._v(" "),n("li",[n("code",[e._v("AZURE_STORAGE_ACCOUNT_KEY")]),e._v(": the storage account key")]),e._v(" "),n("li",[n("code",[e._v("AZURE_STORAGE_BLOB_ENDPOINT")]),e._v(": the blob storage endpoint")]),e._v(" "),n("li",[n("code",[e._v("MONGODB_DATABASE")]),e._v(": the MongoDB database name")]),e._v(" "),n("li",[n("code",[e._v("MONGODB_URI")]),e._v(": the MongoDB database URL")])])])}),[],!1,null,null,null);t.default=r.exports}}]);