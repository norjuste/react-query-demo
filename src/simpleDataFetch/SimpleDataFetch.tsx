import { useQuery } from '@tanstack/react-query';

function SimpleDataFetch() {
  const { data } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const data = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,flags'
      );

      return data.json() as Promise<
        Array<{ name: { common: string }; flags: { png: string } }>
      >;
    },
  });

  return (
    <ul>
      {data?.map(({ flags: { png }, name: { common } }) => (
        <li key={common}>
          <img src={png}></img>
          <span>{common}</span>
        </li>
      ))}
    </ul>
  );
}

export default SimpleDataFetch;
