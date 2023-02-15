
/**
 * Get the result of numbers and respond.
 * @param {Object} req 
 * @param {Object} res 
 */
exports.add = (req, res) => {
  const { number_1, number_2 } = req.body;
  let result = Number(number_1) + Number(number_2);
  let total_sum = result;
  console.log('>>>> result => ', total_sum);
  return res.status(200).json({ result });
};
