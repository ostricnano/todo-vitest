import './SkeletonLoader.css'
export const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-avatar"></div>
      <div className="skeleton-text">
        <div className='skeleton-fullname'>
          <div className="skeleton-name"></div>
          <div className="skeleton-lastname"></div>
        </div>
        <div className='skeleton-username'></div>
      </div>
    </div>
  )
}
