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

export { getRandomDescription };
