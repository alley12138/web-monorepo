
const SButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="s-button">
      {label}
    </button>
  )
}

export default SButton // 默认导出
