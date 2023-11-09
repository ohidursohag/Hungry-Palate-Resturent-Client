import PropTypes from 'prop-types'

const Title = ({ children }) => {
  return (
    <div className="relative border-s-8 border-[#facc4c] ps-3 font-aladin">
      <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#282531] font-bold font-roboto-slab">{children}</h2>
      <p className="absolute bottom-0 text-[#DCB342] text-[50px] sm:text-[75px] md:text-[85px] lg:text-9xl -z-10 opacity-25">{children}</p>
    </div>
  );
};
Title.propTypes = {
  children: PropTypes.node
}
export default Title;
