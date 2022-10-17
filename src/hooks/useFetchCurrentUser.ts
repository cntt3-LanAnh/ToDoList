import { ProfileResDto } from 'dto/responses';
import { useQuery } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMe } from 'services/api';
import { useSelector } from 'stores';
import { profileAction } from 'stores/reducers/profile';

export function useFetchCurrentUser() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);

  const { data } = useQuery<ProfileResDto, ProfileResDto>({ apiConfig: getMe, dataResDto: ProfileResDto, option: { enabled: !!token } });

  useEffect(() => {
    if (!data?.data) {
      return;
    }

    const userProfile: ProfileResDto = data.data;
    dispatch(profileAction.setProfile(userProfile));
  }, [data]);
}
