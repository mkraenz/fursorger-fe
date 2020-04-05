import intersection from "lodash.intersection";

type IMaybeLevel = {
    cities: {}[];
    player: {
        stock: number;
        location: string;
    };
    travelPaths: {}[];
    background: string;
    [key: string]: any;
};
const expectedNumberOfKeys = 4;

/** asserts and throws user-readable errors if not */
export const assertBasicLevelStructure = (content: string) => {
    let obj: IMaybeLevel;

    obj = parseOrReadableError(content); // todo catch parse errors

    const levelKeys = ["cities", "player", "background", "travelPaths"];
    assertHasLevelKeys(obj, levelKeys);
};

const assertHasLevelKeys = (obj: IMaybeLevel, levelKeys: string[]) => {
    const keys = Object.keys(obj);
    if (intersection(keys, levelKeys).length !== expectedNumberOfKeys) {
        throw new Error(`Error: Selected file is a valid .json file but not a valid Fursorger level. Please correct.

Expected keys in .json file to be exactly
${levelKeys.join(", ")}
but found
${keys.join(", ")}`);
    }
};

const parseOrReadableError = (content: string) => {
    try {
        return JSON.parse(content);
    } catch (error) {
        throw new Error(`Error: Selected file is not a valid .json file. Please correct.

For nerds:
Original error: ${error.message}`);
    }
};
