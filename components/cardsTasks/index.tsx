import { SlOptionsVertical } from "react-icons/sl";

interface IDataCard {
  data: {
    title: string;
    tag: string;
    created_at: string;
    updated_at: string;
  };
}

const CardTasks = ({ data }: IDataCard) => {
  const { title, tag } = data;
  return (
    <div>
      <p>titulo</p>
      <div>
        <p>tag</p>
        <p>check</p>
        <button>
          <SlOptionsVertical />
        </button>
      </div>
    </div>
  );
};

export default CardTasks;
