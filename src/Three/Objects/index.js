import cubeObj from "./cube";
import houseObjGroup from "./house";
import customObj1 from "./customObj1";

const MyObjs = (THREE) => {
    const listOfObjs = {
        cube: cubeObj(THREE),
        house: houseObjGroup(THREE),
        customObj1: customObj1(THREE)
    }

    return listOfObjs;
}

export default MyObjs;