## Fuel_usage

## How to use

#### To local run:

start:

`yarn install` | `npm install`
`yarn server` || `npm run server`

#### Endpoints:

`http://localhost:5000/api/calculateDisselUsageForDistance`
`http://localhost:5000/api/probabilityOfUnitInjectorFail`

#### Example usage:

`http://localhost:5000/api/calculateDisselUsageForDistance?distance=400&yearOfProduction=1996&fuelUsagePer100km=10`
`http://localhost:5000/api/probabilityOfUnitInjectorFail?vin=1234567`