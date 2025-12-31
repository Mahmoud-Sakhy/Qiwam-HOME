import { useEffect, useState } from "react";

type Arabic = {
  ARSignIn: {
    BackToDashboard: string;
  };
};

export default function useGetArabic() {
  const [data, setData] = useState<Arabic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchArabic = async () => {
      try {
        const res = await fetch("/JSON/Arabic.JSON"); // لازم يكون من public
        if (!res.ok) throw new Error("Failed to load Arabic.json");
        const json: Arabic = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArabic();
  }, []);

  return { data, loading, error };
}
