import CaretLeftFillIcon from "@/components/Icons/CaretLeftFillIcon";
import CaretRightFillIcon from "@/components/Icons/CaretRightFillIcon";
import React from "react";
import BlueButtonComponent from "../blue-button-component/BlueButtonComponent";

type Props = {};

const CalendarComponent = (props: Props) => {
  const Functions = {
    GetCurrentMonthAndYear() {
      const date = new Date();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();

      return {
        year,
        monthIndex,
      };
    },
    GetCurrentMonthAndYearToString() {
      const months: string[] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      const monthAndYear = Functions.GetCurrentMonthAndYear();
      return `${months[monthAndYear.monthIndex]} de ${monthAndYear.year}`;
    },
    /**
     * Retorna un array de objetos representando los días de un mes específico,
     * junto con información adicional como el nombre del día de la semana.
     *
     * @param {number} month - El mes para el que se desean obtener los días.
     * @param {number} year - El año correspondiente al mes.
     * @returns {Array<object>} - Un array de objetos representando los días del mes.
     */
    GetDaysByMonthAndYear(month: number, year: number) {
      // Calcula la última fecha del mes proporcionado
      const finalDate = new Date(year, month + 1, 0);
      // Array para almacenar los días del mes actual
      const currentMonthDays: any[] = [];

      // Función para convertir una fecha en un objeto con información sobre el día
      const daysToArray = (date: Date, array: any[], currentMonth: boolean) => {
        const weekday = date.toLocaleDateString("es-ES", {
          weekday: "long",
        });
        const day = parseInt(
          date.toLocaleDateString("es-ES", {
            day: "numeric",
          })
        );

        // Objeto que representa el día
        const dayObject = {
          day,
          weekday: `${weekday[0].toUpperCase()}${weekday.substring(1)}`,
          currentMonth,
        };

        array.push(dayObject); // Agrega el día al array
      };

      // Genera los días del mes actual y los agrega al array
      for (let dayIndex = 1; dayIndex <= finalDate.getDate(); dayIndex++) {
        const date = new Date(year, month, dayIndex);
        daysToArray(date, currentMonthDays, true);
      }

      // Nombres de los días de la semana en español
      const weekdaysNames = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ];

      // Obtiene el nombre del primer y último día de la semana del mes actual
      const firstWeekday = currentMonthDays[0].weekday;
      const lastWeekday = currentMonthDays[currentMonthDays.length - 1].weekday;
      const firstWeekdayIndex = weekdaysNames.indexOf(firstWeekday);
      const lastWeekdayIndex = weekdaysNames.indexOf(lastWeekday);

      // Arrays para almacenar los días del mes anterior y siguiente
      const previousMonthDays: any[] = [];
      const nextMonthDays: any[] = [];

      // Genera los días del mes anterior al actual y los agrega al array
      for (let dayIndex = -(firstWeekdayIndex - 1); dayIndex <= 0; dayIndex++) {
        const date = new Date(year, month, dayIndex);
        daysToArray(date, previousMonthDays, false);
      }

      // Genera los días del mes siguiente al actual y los agrega al array
      for (
        let dayIndex = lastWeekdayIndex + 1;
        dayIndex < weekdaysNames.length;
        dayIndex++
      ) {
        const updatedDayIndex = dayIndex - lastWeekdayIndex;
        const date = new Date(year, month + 1, updatedDayIndex);
        daysToArray(date, nextMonthDays, false);
      }

      // Concatena los días de los tres arrays en uno solo
      const calendarDays: any[] = [
        ...previousMonthDays,
        ...currentMonthDays,
        ...nextMonthDays,
      ];

      // Retorna el array con todos los días del mes junto con los días del mes anterior y siguiente
      return calendarDays;
    },
  };

  const Renderer = {
    /**
     * Renderiza un componente que muestra los días de un mes en formato de calendario.
     *
     * @returns {JSX.Element[]} - Un array de elementos JSX que representan los días del mes en formato de calendario.
     */
    Days() {
      // Obtiene el mes y año actual
      const currentMonthAndYear = Functions.GetCurrentMonthAndYear();
      // Obtiene los días del mes actual
      const days = Functions.GetDaysByMonthAndYear(
        currentMonthAndYear.monthIndex,
        currentMonthAndYear.year
      );
      // Calcula el número de semanas en el mes
      const numOfWeeks = days.length / 7;
      // Array para almacenar las semanas
      const weeks: any[] = [];

      // Itera sobre cada semana
      for (let _it_ = 0; _it_ < numOfWeeks; _it_++) {
        const weekArray: any[] = [];

        // Itera sobre cada día de la semana
        for (let _it2_ = 0; _it2_ < 7; _it2_++) {
          const dayIndex = 7 * _it_ + _it2_;
          weekArray.push(days[dayIndex]);
        }

        // Agrega la semana al array de semanas
        weeks.push(weekArray);
      }

      // Retorna un array de elementos JSX representando los días del mes en formato de calendario
      return weeks.map((weekArray: any[], weekArrayKey: number) => {
        return (
          <div key={weekArrayKey} className="w-full h-full flex">
            {weekArray.map((day: any, dayKey: number) => {
              return (
                <div
                  key={dayKey}
                  className="w-full h-full flex flex-col border border-gray-300"
                >
                  <div
                    className={`p-1 flex justify-end border-b border-b-gray-300 ${
                      day.currentMonth ? "bg-blue-100" : ""
                    }`}
                  >
                    <span
                      className={`text-xs ${
                        day.currentMonth
                          ? "text-blue-800 font-bold"
                          : "text-gray-400"
                      }`}
                    >
                      {day.day}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      });
    },
  };

  Functions.GetDaysByMonthAndYear(8, 2024);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="p-1 flex justify-between items-center">
        <div className="flex gap-1">
          <BlueButtonComponent>
            <CaretLeftFillIcon />
          </BlueButtonComponent>
          <BlueButtonComponent>
            <CaretRightFillIcon />
          </BlueButtonComponent>
        </div>
        <div className="font-bold text-lg text-blue-800">
          {Functions.GetCurrentMonthAndYearToString()}
        </div>
        <div className="flex gap-1">
          <BlueButtonComponent>Semana</BlueButtonComponent>
          <BlueButtonComponent>Mes</BlueButtonComponent>
        </div>
      </div>
      <div className="flex text-blue-50">
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Lun
        </div>
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Mar
        </div>
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Mié
        </div>
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Jue
        </div>
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Vie
        </div>
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Sab
        </div>
        <div className="p-1 w-full border border-solid border-blue-700 bg-blue-500 flex justify-center items-center">
          Dom
        </div>
      </div>
      <div className="w-full h-full overflow-hidden flex flex-col">
        {Renderer.Days()}
      </div>
    </div>
  );
};

export default CalendarComponent;
