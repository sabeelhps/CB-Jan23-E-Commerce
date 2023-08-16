

const echo = (req, res) => {
    
    res.send('Recived Echo');
};

const healthcheck = (req, res) => {
    
    res.send('Received Echo');
};

module.exports = {
    echo,
    healthcheck,
};
