router.get('/test-token', (req, res) => {
    const testToken = jwt.sign(
      { userId: 'test123', role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token: testToken });
  });