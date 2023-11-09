import PropTypes from 'prop-types'

const Title2 = ({ children }) => {
   return (
      <div className="relative border-s-8 border-[#facc4c] ps-3 font-aladin">
         <h2 className="text-2xl sm:text-3xl md:text-[40px]  text-[#282531] font-bold font-roboto-slab">{children}</h2>
         <p className="absolute bottom-0 text-[#DCB342] text-[45px] sm:text-[55px] md:text-[65px] -z-10 opacity-25">{children}</p>
      </div>
   );
};
Title2.propTypes = {
   children: PropTypes.node
}
export default Title2;