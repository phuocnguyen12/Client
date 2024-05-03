import { isMoment } from "moment/moment";
import React, { useEffect } from "react";
import { Button, InputForm } from "../../Components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrent } from "../../apis";
import { getCurrent } from "../../store/user/asyncActions";
import { toast } from "react-toastify";
import avatar from "../../assets/icon-user.png"

const Personal = () => {
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
  } = useForm();
  const { current } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdateInfo = async (data) => {
    const formData = new FormData();

    if (data.avatar.length > 0) {
      formData.append("avatar", data.avatar[0]);
    }

    delete data.avatar;

    for (let i of Object.entries(data)) {
      formData.append(i[0], i[1]);
    }

    const response = await updateCurrent(formData);
    console.log(response);
    if (response.success) {
      dispatch(getCurrent());
      toast.success("Success");
    } else {
      toast.error("Fail");
    }
  };

  useEffect(() => {
    reset({
      firstname: current?.firstname,
      lastname: current?.lastname,
      mobile: current?.mobile,
      avatar: current?.avatar,
      email: current?.email,
    });
  }, [current]);
  return (
    <div className="w-full relative px-4">
      <header className="text-3xl font-semibold py-4 border-b border-b-blue-200">
        Personal
      </header>

      <form
        onSubmit={handleSubmit(handleUpdateInfo)}
        className="w-3/5 mx-auto py-8 flex flex-col gap-4 my-4"
      >
        <InputForm
          label="Firstname"
          register={register}
          errors={errors}
          id="firstname"
          validate={{
            required: "Need fill",
          }}
        />
        <InputForm
          label="Lastname"
          register={register}
          errors={errors}
          id="lastname"
          validate={{
            required: "Need fill",
          }}
        />
        <InputForm
          label="Email"
          register={register}
          errors={errors}
          id="email"
          validate={{
            required: "Need fill",
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "email invalid",
            },
          }}
        />
        <InputForm
          label="Phone"
          register={register}
          errors={errors}
          id="mobile"
          validate={{
            required: "Need fill",
            pattern: {
              value:
                /^[\+]?[)]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/gm,

              message: "Phone invalid",
            },
          }}
        />
        <div className="flex items-center gap-2 my-6">
          <span className="font-medium">Account status: </span>
          <span>{current?.isBlocked ? "Blocked" : "Actived"}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Role: </span>
          <span>{current?.role === 0 ? "Admin" : "User"}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Created At: </span>
          <span>{isMoment(current?.createdAt).fromNow()}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Profile image: </span>
          <label htmlFor="file">
            <img
              src={current?.avatar || avatar}
              alt="avatar"
              className="w-20 h-20 ml-8 object-cover rounded-full cursor-pointer"
            />
          </label>
          <input type="file" id="file" {...register("avatar")} hidden />
        </div>
        {isDirty && (
          <div className="w-full flex justify-end">
            <Button type="submit">Update</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Personal;
