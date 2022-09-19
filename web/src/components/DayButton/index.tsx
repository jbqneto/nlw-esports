
const WEEK_DAYS = {
    'DOM': 'Domingo',
    'SEG': 'Segunda',
    'TER': 'Terça',
    'QUA': 'Quarta',
    'QUI': 'Quinta',
    'SEX': 'Sexta',
    'SAB': 'Sábado'
}

const days = ['DOM' , 'SEG' , 'TER' , 'QUA' , 'QUI' , 'SEX' , 'SAB'] as const;

type Day = typeof days[number];

interface Props {
    day: Day,
}

function getFullDay(day: Day): string {
    return WEEK_DAYS[day] ?? '';
}

function getCharDay(day: Day): string {
    return day.toString().charAt(0);
}

export function DayButton({day}: Props) {

    return (
        <button className='w-8 h-8 rounded bg-zinc-900' title={getFullDay(day)}>{getCharDay(day)}</button>
    );
}