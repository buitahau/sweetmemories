import { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getSettings, updateSettings } from '../lib/api';
import { queryClient } from '../lib/queryClient';
import type { Settings } from '../types';

export function useSettings() {
  const { data: savedSettings, isLoading } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  const [draft, setDraft] = useState<Settings | null>(null);

  const currentSettings = draft ?? savedSettings;

  const mutation = useMutation({
    mutationFn: updateSettings,
    onSuccess: (data) => {
      queryClient.setQueryData<Settings>(['settings'], data);
      setDraft(null);
    },
  });

  const updateField = useCallback(
    <K extends keyof Settings>(field: K, value: Settings[K]) => {
      setDraft((prev) => {
        const base = prev ?? savedSettings;
        if (!base) return prev;
        return { ...base, [field]: value };
      });
    },
    [savedSettings],
  );

  const save = useCallback(() => {
    if (currentSettings) {
      mutation.mutate(currentSettings);
    }
  }, [currentSettings, mutation]);

  const cancel = useCallback(() => {
    setDraft(null);
  }, []);

  const isDirty = draft !== null;

  return {
    settings: currentSettings,
    isLoading,
    isSaving: mutation.isPending,
    isDirty,
    updateField,
    save,
    cancel,
  };
}
