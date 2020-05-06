export default (req, res) => {
  res.statusCode = 200
  const d = new Date()
  res.json({ date: d.toLocaleDateString() })
}
