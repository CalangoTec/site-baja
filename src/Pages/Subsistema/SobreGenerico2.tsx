export interface SobreGenerico2Props {
    foto1: string;
    foto2: string;
    texto1: string;
    texto2: string;
}

export default function SobreGenerico2(props: SobreGenerico2Props) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center mt-2 pt-20 px-4 md:px-10 lg:px-20 relative overflow-x-hidden">
        <div className="w-full max-w-screen-lg flex flex-col gap-16">

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[100px]">
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full text-justify text-black text-xl font-normal font-['Inter'] tracking-tight">
              <p>
              {props.texto1}
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center ">
            <img className="w-[100%] rounded-3xl pl-" src={props.foto1} alt="" />
          </div>

        </div>


        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="md:w-3/5">
            <img className="w-full h-auto rounded-3xl" src={props.foto2} alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="text-justify text-black text-lg font-normal font-['Inter'] tracking-tight">
              <p>
              {props.texto2}
              </p>
            </div>
          </div>
        </div>

        
      </div>
      </div>
    )
}