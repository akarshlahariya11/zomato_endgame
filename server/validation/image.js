import joi from "joi";

export const ValidateImageLocation = (imageObject) => {
    const Schema = joi.object({
        images: joi
            .array()
            .items(joi.object({ location: joi.string().required() })),
    });

    return Schema.validateAsync(imageObject);
};