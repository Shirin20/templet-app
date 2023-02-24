/**
 * Module for the TellUsController.
 *
 * @author Shirin Meirkhan
 * @version 1.0.0
 */

/**
 * Encapsulates a controller.
 */
export class TellUsController {
  /**
   * Displays a list of code Snippets.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async index (req, res, next) {
    try {
      
      // res.send('tell us')
      res.render('tell-us/index')
    } catch (error) {
      next(error)
    }
  }
}
