import { ApiRes } from "../utils/ApiRes.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const healthcheck = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiRes(200, "OK", "Healt check passed"))

});

export { healthcheck }
