import './index.css'

const TabItems = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'custom-button active' : 'custom-button'

  return (
    <li className="list-items">
      <button
        type="button"
        className={tabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
