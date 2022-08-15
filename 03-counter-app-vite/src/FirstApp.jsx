import PropTypes from 'prop-types';

export const App = ({title}) => {
  return (
    <>
      <h1>{title}</h1>
      <p> Hola</p>
    </>
  );
};
App.propTypes = {
  title: PropTypes.string.isRequired
}

App.defaultProps = { 
  title: 'no hay titulo'
}