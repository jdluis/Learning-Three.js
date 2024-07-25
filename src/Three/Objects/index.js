import cubeObj from "./cube";
import houseObjGroup from "./house";

const MyObjs = (THREE) => {
    const listOfObjs = {
        cube: cubeObj(THREE),
        house: houseObjGroup(THREE)
    }

    return listOfObjs;
}

export default MyObjs;