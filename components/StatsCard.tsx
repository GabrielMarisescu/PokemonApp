const StatsCard = ({ stats }: any) => {
  const getTotalStats = (stats: any) => {
    let totalStats = 0;
    stats.forEach((stat: any) => {
      totalStats += stat.base_stat;
    });
    return totalStats;
  };

  const totalStats = getTotalStats(stats);

  return (
    <div className='flex border-b '>
      <div className='py-2 bg-white rounded shadow-md '>
        <table>
          <thead className='border-b '>
            <tr className='bg-white w-32'>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Hp
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Attack
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Defense
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Special Attack
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Special Defense
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Speed
              </th>
              <th
                scope='col'
                className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b'>
              <td className='px-6 py-4 text-sm  text-gray-900'>
                {stats[0].base_stat}
              </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 '>
                {stats[1].base_stat}
              </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 '>
                {stats[2].base_stat}
              </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 '>
                {stats[3].base_stat}
              </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 '>
                {stats[4].base_stat}
              </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 '>
                {stats[5].base_stat}
              </td>
              <td className='text-sm text-gray-900 font-light px-6 py-4 '>
                {totalStats}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsCard;
