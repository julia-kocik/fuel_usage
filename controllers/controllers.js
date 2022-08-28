exports.calculateDisselUsageForDistance = async (req, res, next) => {
    try {
        res.json({message: 'CalculateDisselUsageForDistance Route'})
    } catch (error) {
        res.status(500);
        res.json({message: error})
    }
}

exports.probabilityOfUnitInjectorFail = async (req, res, next) => {
    try {
        res.json({message: 'ProbabilityOfUnitInjectorFail Route'})
    } catch (error) {
        res.status(500);
        res.json({message: error})
    }
}