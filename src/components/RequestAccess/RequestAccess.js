import Button from '../Button';

import './RequestAccess.scss';

const RequestAccess = () => {

  return (
    <div className="request-access-form">
      <Button href="https://wfil.substack.com/welcome" alias="link" target="_blank" rel="noopener noreferrer">
        Subscribe for news! 🚀
      </Button>
    </div>
  )
}
 
export default RequestAccess;