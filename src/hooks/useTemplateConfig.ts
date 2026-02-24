import { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getTemplateConfig, updateTemplateConfig } from '../lib/api';
import { queryClient } from '../lib/queryClient';
import type { TemplateConfig } from '../types';

export function useTemplateConfig() {
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const [showToast, setShowToast] = useState(true);

  const { data: config, isLoading } = useQuery({
    queryKey: ['templateConfig'],
    queryFn: getTemplateConfig,
  });

  const mutation = useMutation({
    mutationFn: updateTemplateConfig,
    onSuccess: (data) => {
      queryClient.setQueryData<TemplateConfig>(['templateConfig'], data);
      setLastSavedAt(new Date());
      setShowToast(true);
    },
  });

  const updateConfig = useCallback(
    (partial: Partial<TemplateConfig>) => {
      if (!config) return;
      mutation.mutate({ ...config, ...partial });
    },
    [config, mutation],
  );

  const toggleCategory = useCallback(
    (categoryId: string, checked: boolean) => {
      if (!config) return;
      const next = checked
        ? [...config.selectedCategories, categoryId]
        : config.selectedCategories.filter((id) => id !== categoryId);
      mutation.mutate({ ...config, selectedCategories: next });
    },
    [config, mutation],
  );

  const dismissToast = useCallback(() => setShowToast(false), []);

  const toastMessage = lastSavedAt
    ? `Auto-saved ${Math.round((Date.now() - lastSavedAt.getTime()) / 60000)} mins ago`
    : 'Auto-saved 2 mins ago';

  return {
    config,
    isLoading,
    isSaving: mutation.isPending,
    updateConfig,
    toggleCategory,
    showToast,
    toastMessage,
    dismissToast,
  };
}
