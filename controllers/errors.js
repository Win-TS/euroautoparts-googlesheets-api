exports.get404 = (req, res) => {
    res.status(404).json({ error: "Route Not Found" });
};