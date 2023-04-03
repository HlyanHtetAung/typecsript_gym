import { STYLES } from '../styles';
import Trainer from './Trainer';
import { useGetTrainers } from '../customHooks';

const ShowcaseTrainer = () => {
  const { trainers } = useGetTrainers();

  return (
    <section id="trainer-section" className="w-full bg-bgWhite">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
      >
        <h2 className={STYLES.heading2OnBgWhite}>Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] mt-[20px]">
          {trainers.map((aboutTrainer: any) => (
            <Trainer
              key={aboutTrainer.id}
              trainerName={aboutTrainer.name}
              trainerPhotoUrl={aboutTrainer.image_path}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseTrainer;
