export const useAccordion = (multiple = false) => {
    const openIds = ref<number[]>([])

    const toggle = (id: number) => {
        if (multiple) {
            openIds.value.includes(id)
                ? openIds.value = openIds.value.filter(i => i !== id)
                : openIds.value.push(id)
        } else {
            openIds.value = openIds.value[0] === id ? [] : [id]
        }
    }

    return { openIds, toggle }
}
