import React from 'react';
import {
    Button,
    Dropdown,
    Icon
} from 'semantic-ui-react'


function App() {
    return (
<div className="advisors">
<div className="advisor">
  <div class="content">
    <div class="description">Name: John Bro</div>
    <div class="description">Role:Director</div>
    <div class="description">Company: OCBC</div>
    <div class="description">Rep Code: 111111</div>
  </div>
  <div class="extra content">
    <div >
      <Button basic color='green' content='Approve' />
      <Button basic color='red' content='Decline' />
      <Button basic color='red' content='Delete' />
    </div>
  </div>
</div>
<div className="advisors">
  <div className="advisor">
    <div class="content">
      <div class="description">Name: Taro Bobo</div>
      <div class="description">Role:Director</div>
      <div class="description">Company: Great Eastern</div>
      <div class="description">Rep Code: 222222</div>
    </div>
    <div class="extra content">
      <div >
        <Button basic color='green' content='Approve' />
        <Button basic color='red' content='Decline' />
        <Button basic color='red' content='Delete' />
      </div>
    </div>
  </div>


  <div className="advisors">
    <div className="advisor">
      <div class="content">
        <div class="description">Name: Tom Tom</div>
        <div class="description">Role:Director</div>
        <div class="description">Company: HeHe</div>
        <div class="description">Rep Code: 333333</div>
      </div>
      <div class="extra content">
        <div >
          <Button basic color='green' content='Approve' />
          <Button basic color='red' content='Decline' />
          <Button basic color='red' content='Delete' />
        </div>
      </div>
    </div>


    <div className="advisors">
      <div className="advisor">
        <div class="content">
          <div class="description">Name: Jerry</div>
          <div class="description">Role:Director</div>
          <div class="description">Company: Tom and jerry</div>
          <div class="description">Rep Code: 444444</div>
        </div>
        <div class="extra content">
          <div >
            <Button basic color='green' content='Approve' />
            <Button basic color='red' content='Decline' />
            <Button basic color='red' content='Delete' />
          </div>
        </div>
      </div>


      <div className="advisors">
        <div className="advisor">
          <div class="content">
            <div class="description">Name: Upin</div>
            <div class="description">Role:Director</div>
            <div class="description">Company: Nyoom</div>
            <div class="description">Rep Code: 555555</div>
          </div>
          <div class="extra content">
            <div >
              <Button basic color='green' content='Approve' />
              <Button basic color='red' content='Decline' />
              <Button basic color='red' content='Delete' />
            </div>
          </div>
        </div>


        <div className="advisors">
          <div className="advisor">
            <div class="content">
              <div class="description">Name: Ipin</div>
              <div class="description">Role:Director</div>
              <div class="description">Company: Ogggy</div>
              <div class="description">Rep Code: 666666</div>
            </div>
            <div class="extra content">
              <div >
                <Button basic color='green' content='Approve' />
                <Button basic color='red' content='Decline' />
                <Button basic color='red' content='Delete' />
              </div>
            </div>
          </div>





        </div>
      </div>
    </div>
  </div>
</div>
</div>
    )
}
    
    export default App;