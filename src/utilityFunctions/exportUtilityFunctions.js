import FileSaver from "file-saver";
import { random } from "../random_descriptions/random";

const getRandomDescription = (description) => {
    const randomIndex = Math.floor(Math.random() * random.length);
    const randomDescription = random[randomIndex];

    // Ist ziemlich unwahrscheinlich, dass sie jemals gleich sein werden, doch sicher ist sicher
    if (randomDescription === description) {
        return getRandomDescription(description);
    }

    return randomDescription;
};

const downloadImage = async (_id, image) => {
    FileSaver.saveAs(image, `image_${_id}.jpg`);
};

export { getRandomDescription, downloadImage };
