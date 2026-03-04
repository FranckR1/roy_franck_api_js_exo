const validateData = (schema) => {
    return (req, res, next) => {
        try {
            req.body = schema.parse(req.body);
            next();
        } catch (error) {
            return res.status(400).json({
                error: "Données invalides",
                details: error.issues.map((e) => `${e.path.join(".")} :${e.message}`),
            });
        }
    };
};

module.exports = { validateData }
