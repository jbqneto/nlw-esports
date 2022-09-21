import * as ToggleGroup from "@radix-ui/react-toggle-group";

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

interface Props extends ToggleGroup.ToggleGroupItemProps {
    value: Day
}

function getFullDay(day: Day): string {
    return WEEK_DAYS[day] ?? '';
}

function getCharDay(day: Day): string {
    return day.toString().charAt(0);
}

interface IWeekDay {
    char: string;
    fullName: string;
    value: string;
}

class WeekDay implements IWeekDay {
    public char: string;
    public fullName: string;
    private _value: number;
    
    constructor(day: Day) {
        this.char = getCharDay(day);
        this.fullName = getFullDay(day);
        this._value = Object.keys(WEEK_DAYS).indexOf(day);
    }

    public get value(): string {
        return this._value.toString();
    }

    public get className() {
        return 'w-8 h-8 rounded';
    }

    public getClassName(selectedWeekDays: string[]): string {
        if (selectedWeekDays.includes(this.value)) {
            return this.className + ' bg-violet-500';
        } else {
            return this.className + ' bg-zinc-900';
        }
    }

}

export const weekDays = days.map((day) => new WeekDay(day));