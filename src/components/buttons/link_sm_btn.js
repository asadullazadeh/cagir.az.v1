const linkSmBtn = ({ btnName, classNames,onClick }) => (
    <>
    <button
    onClick={onClick}
                className= {` py-[10px] px-[26px]
                      font-extrabold text-cagiraz text-[14px] leading-[21px]
                      ${classNames} `}
              >
                { btnName }
              </button>
            </>
)
export default linkSmBtn;
