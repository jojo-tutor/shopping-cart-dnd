import React from 'react'
import cn from 'classnames'
import Button from './Button'
import Logo from './Logo'
import Preloader from './Preloader'
import Error from './Error'
import HeaderTitle from './HeaderTitle'
import FooterLink from './FooterLink'
import FormList from './FormList'

const Form = (props) => {
  const {
    error
    , name
    , isProcessing
    , fieldValues
    , formList
    , preloaderLabel
    , headerTitleLabel
    , submitButtonLabel
    , footerLinkTo
    , footerLinkLabel
    , onChange
    , onSubmit
  } = props

  if (true) {
    return (
      <div className={cn('auth', name, { 'auth-processing': isProcessing })}>
        <Logo />
        <div className='auth_paper'>
          { error && <Error label={error} /> }
          { isProcessing && <Preloader label={preloaderLabel} /> }
          <HeaderTitle label={headerTitleLabel} />
          <form 
            name={name}
            className='auth_form' 
            onSubmit={onSubmit}
          >
            <FormList
              forms={formList}
              fieldValues={fieldValues}
              onChange={onChange}
            />
            
            <Button
              label={submitButtonLabel}
              disabled={isProcessing}
            />
          </form>
          <FooterLink
            to={footerLinkTo}
            label={footerLinkLabel}
          />
        </div>
      </div>
    )
  }

  return (
    <form 
      className='auth_form' 
      onSubmit={onSubmit}
    >
      <FormList
        forms={formList}
        fieldValues={fieldValues}
        onChange={onChange}
      />
      
      <Button label='Register' />
    </form>
  )
}

export default Form
