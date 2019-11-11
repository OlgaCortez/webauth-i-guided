const router = require('express').Router();

var bcrypt = require('bcryptjs');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

router.post('/hash', (req, res) => {
  let credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 14);
  

})

module.exports = router;
