const express = require('express');
const cors = require('cors')

const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const corsOptions = {
    origin: "*",
    credentials: true,
    // access-control-allow-credentials: true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions))
app.get("/", (req, res) => {
    res.send({
        success: true,
        data: {
            memes: [
                {
                    id: "342531219",
                    name: "Sad inspector Vivek",
                    url: "https://i.imgflip.com/5nxms3.jpg",
                    width: 663,
                    height: 463,
                    box_count: 2,
                    captions: 1265000,
                },
                {
                    id: "400636857",
                    name: "Dhek Raha Binod",
                    url: "https://i.imgflip.com/6mj1dl.png",
                    Width: 819,
                    height: 1023,
                    box_count: 2,
                    captions: 1265000,
                },
                {
                    id: "336617462",
                    name: "Modi Ji",
                    url: "https://i.imgflip.com/5kevp2.png",
                    width: 828,
                    height: 548,
                    box_count: 2,
                    captions: 1265000,
                },
                {
                    id: "181913649",
                    name: "Drake Hotline Bling",
                    url: "https://i.imgflip.com/30b1gx.jpg",
                    width: 1200,
                    height: 1200,
                    box_count: 2,
                    captions: 1265000,
                },
            ],
        },
    });
});