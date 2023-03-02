const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs'); //built in fr
const readline = require('readline'); //built in fr
const clear = require('clear');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const upload = async () => {
  try {
    const response = await axios.get('https://api.gofile.io/getServer');
    const server = response.data.data.server;

    const file = () => {
      rl.question('Enter file path: ', async (filePath) => {
        clear();
        try {
          await fs.promises.access(filePath, fs.constants.F_OK);

          const formData = new FormData();
          formData.append('file', fs.createReadStream(filePath));

          try {
            const uploadResponse = await axios.post(`https://${server}.gofile.io/uploadFile`, formData, {
              headers: formData.getHeaders(),
            });
            console.log(uploadResponse.data.data.downloadPage);
          } catch (error) {
            console.error(error);
          }
        } catch (error) {
          console.error(`File not found: ${filePath}`);
        }

        file();
      });
    };

    file();
  } catch (error) {
    console.error(error);
  }
};

upload();
