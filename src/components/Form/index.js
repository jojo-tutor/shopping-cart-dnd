import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from './Button';
import Logo from './Logo';
import Preloader from './Preloader';
import Error from './Error';
import HeaderTitle from './HeaderTitle';
import FooterLink from './FooterLink';
import FormList from './FormList';

const Form = (props) => {
  const {
    error,
    name,
    isProcessing,
    fieldValues,
    formList,
    preloaderLabel,
    headerTitleLabel,
    submitButtonLabel,
    footerLinkTo,
    footerLinkLabel,
    onChange,
    onSubmit,
  } = props;

  const className = cn('auth', name, { 'auth-processing': isProcessing });

  return (
    <div className={className}>
      <Logo />
      <div className="auth_paper">
        <Error visible={!!error} label={error} />
        <Preloader visible={isProcessing} label={preloaderLabel} />
        <HeaderTitle label={headerTitleLabel} />
        <form
          name={name}
          className="auth_form"
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
  );
};

Form.defaultProps = {
  error: '',
  isProcessing: false,
};

Form.propTypes = {
  error: PropTypes.string,
  isProcessing: PropTypes.bool,
  name: PropTypes.string.isRequired,
  fieldValues: PropTypes.object.isRequired,
  preloaderLabel: PropTypes.string.isRequired,
  headerTitleLabel: PropTypes.string.isRequired,
  submitButtonLabel: PropTypes.string.isRequired,
  footerLinkTo: PropTypes.string.isRequired,
  footerLinkLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Form;
