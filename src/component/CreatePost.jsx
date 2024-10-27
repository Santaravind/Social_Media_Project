import React from 'react'

function CreatePost() {
  return (
    <form>
  <fieldset disabled className='m-3'>
    <legend>Disabled fieldset example</legend>
    <div className="mb-3 ">
      <label htmlFor="disabledTextInput" className="Form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" className="Form-control" placeholder="Disabled input" />
    </div>
    <div className="mb-3">
      <label htmlFor="disabledSelect" className="Form-label">Disabled select menu</label>
      <select id="disabledSelect" className="Form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div className="mb-3">
      <div className="Form-check">
        <input className="Form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
        <label className="Form-check-label" htmlFor="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
  )
}

export default CreatePost
