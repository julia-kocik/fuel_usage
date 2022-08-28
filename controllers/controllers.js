exports.calculateDisselUsageForDistance = async (req, res, next) => {
    try {
        const { distance, yearOfProduction, fuelUsagePer100km} = req.query;
        if(!distance || !yearOfProduction || !fuelUsagePer100km) {
            res.status(500).json({message: 'Please make sure you have provided all of the following: distance, yearOfProduction and fuelUsagePer100km'});
        } else if(isNaN(distance*1) || isNaN(yearOfProduction*1) || isNaN(fuelUsagePer100km*1)) {
            res.status(500).json({message: 'Please make sure you have provided numbers for: distance, yearOfProduction and fuelUsagePer100km'});
        } else {
            const result = fuelUsagePer100km/100*distance;
            res.status(200).json({message: `Dissel Usage For Distance is ${result}`});

        }
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.probabilityOfUnitInjectorFail = async (req, res, next) => {
    try {
        const { vin } = req.query;
        const randomNumber = Math.floor(Math.random() * 101);
        if(!vin) {
            res.status(500).json({message: 'Please make sure you have provided vin'});
        } else {
            res.status(200).json({message: `Probability Of Unit Injector Fail is ${randomNumber/100}`});
        }
    } catch (error) {
        res.status(500).res.json({message: error})
    }
}