import cubeObj from "./cube";

const MyObjs = (THREE) => {
    const listOfObjs = {
        cube: cubeObj(THREE)

    }

    return listOfObjs;
}

export default MyObjs;