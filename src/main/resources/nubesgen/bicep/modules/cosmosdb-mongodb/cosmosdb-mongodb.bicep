// MongoDB via CosmosDB - Bicep module
// Generated by NubesGen (www.nubesgen.com)

@description('The name of your application')
param applicationName string

@description('The environment (dev, test, prod, ...')
@maxLength(4)
param environment string = 'dev'

@description('The number of this specific instance')
@maxLength(3)
param instanceNumber string = '001'

@description('The Azure region where all resources in this example should be created')
param location string

@description('A list of tags to apply to the resources')
param tags object

@description('The name of the SQL logical server.')
param accountName string = 'mongodb-${applicationName}-${environment}-${instanceNumber}'

@description('The name of the MongoDB collection.')
param collectionName string = applicationName

@description('Specifies the MongoDB server version to use.')
@allowed([
  '3.2'
  '3.6'
  '4.0'
])
param serverVersion string = '4.0'

@description('The default consistency level of the Cosmos DB account.')
@allowed([
  'Eventual'
  'ConsistentPrefix'
  'Session'
  'BoundedStaleness'
  'Strong'
])
param defaultConsistencyLevel string = 'Session'

@description('Max stale requests. Required for BoundedStaleness. Valid ranges, Single Region: 10 to 1000000. Multi Region: 100000 to 1000000.')
@minValue(10)
@maxValue(2147483647)
param maxStalenessPrefix int = 100000

@description('Max lag time (seconds). Required for BoundedStaleness. Valid ranges, Single Region: 5 to 84600. Multi Region: 300 to 86400.')
@minValue(5)
@maxValue(86400)
param maxIntervalInSeconds int = 300

@description('Maximum throughput when using Autoscale Throughput Policy for the Database')
@minValue(4000)
@maxValue(1000000)
param autoscaleMaxThroughput int = 4000



/////////////////
var consistencyPolicy = {
  Eventual: {
    defaultConsistencyLevel: 'Eventual'
  }
  ConsistentPrefix: {
    defaultConsistencyLevel: 'ConsistentPrefix'
  }
  Session: {
    defaultConsistencyLevel: 'Session'
  }
  BoundedStaleness: {
    defaultConsistencyLevel: 'BoundedStaleness'
    maxStalenessPrefix: maxStalenessPrefix
    maxIntervalInSeconds: maxIntervalInSeconds
  }
  Strong: {
    defaultConsistencyLevel: 'Strong'
  }
}

var locations = [
  {
    locationName: location
    failoverPriority: 0
    isZoneRedundant: false
  }
]

resource databaseAccount 'Microsoft.DocumentDB/databaseAccounts@2021-04-15' = {
  name: accountName
  location: location
  tags: tags
  kind: 'MongoDB'
  properties: {
    consistencyPolicy: consistencyPolicy[defaultConsistencyLevel]
    locations: locations
    databaseAccountOfferType: 'Standard'
    enableFreeTier: true
    apiProperties: {
      serverVersion: serverVersion
    }
  }
}

resource database 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2021-04-15' = {
  parent: databaseAccount
  name: collectionName
  properties: {
    resource: {
      id: collectionName
    }
    options: {
      autoscaleSettings: {
        maxThroughput: autoscaleMaxThroughput
      }
    }
  }
}

resource databaseCollection 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2021-07-01-preview' = {
  name: collectionName
  location: location
  parent: database
  properties: {
    // options: {
    //   autoscaleSettings: {
    //     maxThroughput: int
    //   }
    //   throughput: int
    // }
    resource: {
      // analyticalStorageTtl: int
      id: applicationName
    }
  }
}

output azure_cosmosdb_mongodb_database string = applicationName
output azure_cosmosdb_mongodb_uri string = databaseAccount.properties.documentEndpoint
output azure_cosmosdb_mongodb_accountKey string = listKeys(databaseAccount.name, databaseAccount.apiVersion).primaryMasterKey