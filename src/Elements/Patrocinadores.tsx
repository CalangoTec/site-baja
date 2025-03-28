import logo from '../assets/logoPret.png';
import senai from '../assets/senai.png';
import solid from '../assets/solid.png';
import infleet from '../assets/infleet.png';
import termo from '../assets/termo.png';
import cardan from '../assets/cardanBA.png';

const Patrocinadores = () => {
  return (
    <div className="w-full px-4 lg:px-20 py-12 flex flex-col justify-center items-center h-fit mb-[-160px]">

      {/* Título */}
      <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pb-2 tracking-wide mb-12 mt-8 gap-4">
            <p className="text-black font-semibold text-4xl mb-[-10px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">Confira os nossos patrocinadores:</p>
            <div className="flex items-center justify-center">
            <div className="border-t-2 border-[#000000] w-16 mx-2"></div>
            <img src={logo} alt="Logo" className="h-14 w-14" />
            <div className="border-t-2 border-[#000000] w-16 mx-2"></div>
            </div>
        </div>

      {/* Infleet */}
      <div className="flex flex-wrap justify-center items-center gap-16">
        {/* Card 1 */}
        <div className="w-full md:w-[180px] overflow-hidden flex flex-col relative h-[307px]">
        <img src={infleet} alt="Infleet Logo"/>
        </div>

        {/* Senai */}
        <div className="w-full md:w-[180px] overflow-hidden flex flex-col relative h-[307px]">
            <img src={senai} alt="Senai CIMATEC Logo"/>
        </div>

        {/* SolidWorks */}
        <div className="w-full md:w-[180px] overflow-hidden flex flex-col relative h-[265px]">
            <img className="" src={solid} alt="SolidWorks Logo"/>
        </div>

        <div className="w-full md:w-[180px] overflow-hidden flex flex-col relative h-[305px]">
            <img className="" src={cardan} alt="Cardan Logo"/>
        </div>

        <div className="w-full md:w-[180px] overflow-hidden flex flex-col relative h-[290px]">
            <img className="" src={termo} alt="termoTubos"/>
        </div>
 
      </div>
    </div>
  );
};

export default Patrocinadores;
