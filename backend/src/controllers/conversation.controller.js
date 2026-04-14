import { asyncHandler } from "../utils/asyncHandler.util.js";
import { ApiError } from "../utils/ApiError.util.js"
import { ApiResponse } from "../utils/ApiResponse.util.js"
import Conversation from "../models/conversation.model.js"

export const createConversation = asyncHandler(async (req, res, next) => {
    const newConversation = new Conversation({
        id: req.isSeller ? req.userId + req.body.to : req.userId,
        sellerId: req.isSeller ? req.userId : req.body.to,
        buyerId: req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller,
        readByBuyer: !req.isSeller
    })

    const savedConversation = await newConversation.save();
    res.status(201).json(new ApiResponse(201, savedConversation, ""))
})

export const updateConversation = asyncHandler(async (req, res, next) => {
    const updatedConversation = await Conversation.findOneAndUpdate(
        { id: req.param.id},{
            $set: {
                ...ApiError(req.isSeller ? { readBySeller: true} : { readByBuyer: true})
            }
        },
        { new: true }
    )

    res.status(200).json(new ApiResponse(200, updatedConversation, ""))
})

export const getSingleConversation = asyncHandler(async(req, res, next)=> {
    const conversation = await Conversation.findOne({ id: req.params.id })
    res.status(200).json(new ApiResponse(200, conversation, {}))
})

export const getConversations = asyncHandler(async(req, res, next)=> {
    const conversations = await Conversation.find(
        req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 })
    res.status(200).json(new ApiResponse(200, conversations, {}))
})