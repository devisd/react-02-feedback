import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 120,
      }}
    >
      <Feedback />
    </div>
  );
};
