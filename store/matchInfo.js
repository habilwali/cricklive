// store.js
import create from 'zustand';
import qs from 'query-string';

const URL = 'https://cricapp.bingerush.com/api/matches/list/upcoming';

const useUpcomingMatchesStore = create((set) => ({
  upcomingMatches: null,
  getUpcomingMatches: async (query) => {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        matchType: query.matchType,
      },
    });

    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      const data = await res.json();
      set({ upcomingMatches: data });
    } catch (error) {
      console.error('Error fetching upcoming matches:', error);
    }
  },
}));

export default useUpcomingMatchesStore;
