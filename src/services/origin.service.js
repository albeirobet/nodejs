const Origin = require('../models/origin.model')
const validator = require('../utils/validators/validator')
const ApiError = require('../dtos/commons/response/api-error.dto')
const ServiceException = require('../utils/errors/service-exception')
const commonErrors = require('../utils/constants/common-errors')

// var functions = {};

// functions.create = (async function (req, res) {
//     console.log('Calling create origin ')
//     // Validate request 
//     validator.validateNotNullRequest(req);
//     // Print request
//     console.dir(req.body);
//     // Validate required fields
//     validator.validateNotNullParameter(req.body.name);
//     validator.validateNotNullParameter(req.body.description);
//     // Create a new Origin
//     const origin = new Origin({
//         name: req.body.name,
//         description: req.body.description
//     });
//     // Save origin in the database
//     try {
//         let originDB = await origin.save();
//         return originDB;
//     } catch (error) {
//         console.log('That did not go well.')
//         console.error(error)
//         throw new ServiceException(commonErrors.E_COMMON_01, new ApiError(commonErrors.EM_COMMON_04 + 'Origin', error, "EM_COMMON_04"));
//     }




// })()

// let create = async function (req, res) {
//     console.log('Calling create origin ')
//     // Validate request 
//     validator.validateNotNullRequest(req);
//     // Print request
//     console.dir(req.body);
//     // Validate required fields
//     validator.validateNotNullParameter(req.body.name);
//     validator.validateNotNullParameter(req.body.description);
//     // Create a new Origin
//     const origin = new Origin({
//         name: req.body.name,
//         description: req.body.description
//     });
//     // Save origin in the database



//     // try {
//     //     let originDB = await origin.save();
//     //     let originReturn = JSON.stringify(originDB)
//     //     console.dir(originReturn)
//     //     return originReturn;
//     // } catch (error) {
//     //     console.log('That did not go well.')
//     //     console.error(error)
//     //     throw new ServiceException(commonErrors.E_COMMON_01, new ApiError(commonErrors.EM_COMMON_04 + 'Origin', error, "EM_COMMON_04"));
//     // }

//     origin.save()
//         .then(data => {
//             console.dir(data)
//             res.send(data);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Something went wrong while creating new user."
//             });
//         });



// };



// module.exports = functions;


exports.create = async (req, res) => {


    console.log('Calling create origin ')
    // Validate request 
    validator.validateNotNullRequest(req);
    // Print request
    console.dir(req.body);
    // Validate required fields
    validator.validateNotNullParameter(req.body.name);
    validator.validateNotNullParameter(req.body.description);
    // Create a new Origin
    const origin = new Origin({
        name: req.body.name,
        description: req.body.description
    });
    // Save origin in the database


    // Save user in the database
    let savedOrigin = await origin.save();
    console.log('enviando: ', savedOrigin)
    return savedOrigin;
        /*.then(data => {
            console.log('sending: ',data)
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while creating new user."
            });
        });*/
};